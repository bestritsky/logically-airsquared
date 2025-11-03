import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface UserWithRole {
  id: string;
  email: string;
  created_at: string;
  roles: string[];
}

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('Not authenticated');

      // Call edge function to list users (requires admin role)
      const { data, error: functionError } = await supabase.functions.invoke('list-users', {
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });
      
      if (functionError) throw functionError;
      if (!data?.users) throw new Error('No users data returned');

      // Then get all roles
      const { data: rolesData, error: rolesError } = await supabase
        .from("user_roles")
        .select("user_id, role");

      if (rolesError) throw rolesError;

      // Combine users with their roles
      const usersWithRoles: UserWithRole[] = data.users.map((user: any) => ({
        id: user.id,
        email: user.email || '',
        created_at: user.created_at,
        roles: rolesData
          ?.filter(r => r.user_id === user.id)
          .map(r => r.role) || []
      }));

      return usersWithRoles;
    },
  });
};

export const useAssignRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: string }) => {
      const { error } = await supabase
        .from("user_roles")
        .insert({ user_id: userId, role: role as any });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("Role assigned successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to assign role: ${error.message}`);
    },
  });
};

export const useRemoveRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: string }) => {
      const { error } = await supabase
        .from("user_roles")
        .delete()
        .eq("user_id", userId)
        .eq("role", role as any);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("Role removed successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to remove role: ${error.message}`);
    },
  });
};

export const useClientAccess = (userId: string) => {
  return useQuery({
    queryKey: ["client-access", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("client_access")
        .select(`
          id,
          client_id,
          clients:client_id (
            name
          )
        `)
        .eq("user_id", userId);

      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });
};

export const useAssignClientAccess = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, clientId }: { userId: string; clientId: number }) => {
      const { error } = await supabase
        .from("client_access")
        .insert({ user_id: userId, client_id: clientId });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-access"] });
      toast.success("Client access granted");
    },
    onError: (error: Error) => {
      toast.error(`Failed to grant access: ${error.message}`);
    },
  });
};

export const useRemoveClientAccess = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (accessId: string) => {
      const { error } = await supabase
        .from("client_access")
        .delete()
        .eq("id", accessId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-access"] });
      toast.success("Client access removed");
    },
    onError: (error: Error) => {
      toast.error(`Failed to remove access: ${error.message}`);
    },
  });
};
