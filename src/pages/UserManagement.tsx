import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { useUsers, useAssignRole, useRemoveRole, useClientAccess, useAssignClientAccess, useRemoveClientAccess, useCreateUser, useUpdateUser, useDeleteUser } from "@/hooks/useUsers";
import { useClients } from "@/hooks/useClients";
import { useState } from "react";
import { UserPlus, Shield, X, Building2, Trash2, Mail, Key } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema, updateUserSchema } from "@/lib/userValidation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export default function UserManagement() {
  const { data: users, isLoading } = useUsers();
  const { data: clients } = useClients();
  const assignRole = useAssignRole();
  const removeRole = useRemoveRole();
  const assignClientAccess = useAssignClientAccess();
  const removeClientAccess = useRemoveClientAccess();
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [manageDialogOpen, setManageDialogOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const { data: clientAccess } = useClientAccess(selectedUser || "");

  const availableRoles = ["admin", "manager", "sales", "viewer"];

  // Get current user ID
  useState(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setCurrentUserId(data.user.id);
    });
  });

  // Create user form
  const createForm = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Update user form
  const updateForm = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleCreateUser = async (values: z.infer<typeof createUserSchema>) => {
    await createUser.mutateAsync({
      email: values.email,
      password: values.password,
    });
    createForm.reset();
    setCreateDialogOpen(false);
  };

  const handleUpdateUser = async (values: z.infer<typeof updateUserSchema>) => {
    if (!selectedUser) return;
    await updateUser.mutateAsync({
      userId: selectedUser,
      email: values.email || undefined,
      password: values.password || undefined,
    });
    updateForm.reset();
  };

  const handleDeleteUser = async (userId: string) => {
    await deleteUser.mutateAsync(userId);
    setManageDialogOpen(false);
  };

  const handleAssignRole = () => {
    if (selectedUser && selectedRole) {
      assignRole.mutate({ userId: selectedUser, role: selectedRole });
      setSelectedRole("");
    }
  };

  const handleRemoveRole = (userId: string, role: string) => {
    removeRole.mutate({ userId, role });
  };

  const handleAssignClient = () => {
    if (selectedUser && selectedClient) {
      assignClientAccess.mutate({ 
        userId: selectedUser, 
        clientId: parseInt(selectedClient) 
      });
      setSelectedClient("");
    }
  };

  const handleRemoveClientAccess = (accessId: string) => {
    removeClientAccess.mutate(accessId);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="animate-pulse">Loading users...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage user roles and client access permissions
            </p>
          </div>
          
          <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Create User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New User</DialogTitle>
                <DialogDescription>
                  Add a new user to the system
                </DialogDescription>
              </DialogHeader>
              <Form {...createForm}>
                <form onSubmit={createForm.handleSubmit(handleCreateUser)} className="space-y-4">
                  <FormField
                    control={createForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="user@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Min 6 characters" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Re-enter password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={createUser.isPending}>
                    {createUser.isPending ? "Creating..." : "Create User"}
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Users & Roles</CardTitle>
            <CardDescription>
              Assign roles and manage client access for each user
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Roles</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.email}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {user.roles.length === 0 ? (
                          <Badge variant="outline">No roles</Badge>
                        ) : (
                          user.roles.map((role) => (
                            <Badge key={role} variant="secondary" className="gap-1">
                              {role}
                              <button
                                onClick={() => handleRemoveRole(user.id, role)}
                                className="ml-1 hover:text-destructive"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(user.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog open={manageDialogOpen && selectedUser === user.id} onOpenChange={(open) => {
                          setManageDialogOpen(open);
                          if (!open) {
                            setSelectedUser(null);
                            updateForm.reset();
                          }
                        }}>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedUser(user.id);
                                setManageDialogOpen(true);
                                updateForm.reset();
                              }}
                            >
                              <Shield className="h-4 w-4 mr-2" />
                              Manage
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Manage User: {user.email}</DialogTitle>
                            <DialogDescription>
                              Assign roles and client access
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            {/* Update Email/Password */}
                            <div>
                              <h3 className="text-sm font-medium mb-3">Update User Details</h3>
                              <Form {...updateForm}>
                                <form onSubmit={updateForm.handleSubmit(handleUpdateUser)} className="space-y-4">
                                  <FormField
                                    control={updateForm.control}
                                    name="email"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>
                                          <Mail className="h-4 w-4 inline mr-2" />
                                          New Email (optional)
                                        </FormLabel>
                                        <FormControl>
                                          <Input type="email" placeholder="new@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={updateForm.control}
                                    name="password"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>
                                          <Key className="h-4 w-4 inline mr-2" />
                                          New Password (optional)
                                        </FormLabel>
                                        <FormControl>
                                          <Input type="password" placeholder="Min 6 characters" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <Button type="submit" disabled={updateUser.isPending}>
                                    {updateUser.isPending ? "Updating..." : "Update User"}
                                  </Button>
                                </form>
                              </Form>
                            </div>

                            <Separator />

                            {/* Role Assignment */}
                            <div>
                              <h3 className="text-sm font-medium mb-3">Assign Role</h3>
                              <div className="flex gap-2">
                                <Select value={selectedRole} onValueChange={setSelectedRole}>
                                  <SelectTrigger className="flex-1">
                                    <SelectValue placeholder="Select a role" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {availableRoles
                                      .filter(role => !user.roles.includes(role))
                                      .map(role => (
                                        <SelectItem key={role} value={role}>
                                          {role}
                                        </SelectItem>
                                      ))}
                                  </SelectContent>
                                </Select>
                                <Button 
                                  onClick={handleAssignRole}
                                  disabled={!selectedRole}
                                >
                                  <UserPlus className="h-4 w-4 mr-2" />
                                  Assign
                                </Button>
                              </div>
                            </div>

                            {/* Client Access */}
                            <div>
                              <h3 className="text-sm font-medium mb-3">Client Access</h3>
                              <div className="flex gap-2 mb-4">
                                <Select value={selectedClient} onValueChange={setSelectedClient}>
                                  <SelectTrigger className="flex-1">
                                    <SelectValue placeholder="Select a client" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {clients?.map(client => (
                                      <SelectItem key={client.id} value={client.id.toString()}>
                                        {client.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <Button 
                                  onClick={handleAssignClient}
                                  disabled={!selectedClient}
                                >
                                  <Building2 className="h-4 w-4 mr-2" />
                                  Grant Access
                                </Button>
                              </div>

                              <div className="space-y-2">
                                {clientAccess?.map((access: any) => (
                                  <div 
                                    key={access.id}
                                    className="flex items-center justify-between p-2 border rounded-lg"
                                  >
                                    <span className="text-sm">
                                      {access.clients?.name || 'Unknown Client'}
                                    </span>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => handleRemoveClientAccess(access.id)}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                                {clientAccess?.length === 0 && (
                                  <p className="text-sm text-muted-foreground">
                                    No client access assigned
                                  </p>
                                )}
                              </div>
                            </div>

                            <Separator />

                            {/* Delete User */}
                            <div>
                              <h3 className="text-sm font-medium mb-3 text-destructive">Danger Zone</h3>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button 
                                    variant="destructive" 
                                    disabled={user.id === currentUserId}
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete User
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This action cannot be undone. This will permanently delete the user
                                      <strong> {user.email}</strong> and remove all associated data including roles and client access.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeleteUser(user.id)}
                                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                    >
                                      Delete User
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                              {user.id === currentUserId && (
                                <p className="text-xs text-muted-foreground mt-2">
                                  You cannot delete your own account
                                </p>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
