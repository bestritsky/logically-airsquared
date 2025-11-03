import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useUsers, useAssignRole, useRemoveRole, useClientAccess, useAssignClientAccess, useRemoveClientAccess } from "@/hooks/useUsers";
import { useClients } from "@/hooks/useClients";
import { useState } from "react";
import { UserPlus, Shield, X, Building2 } from "lucide-react";

export default function UserManagement() {
  const { data: users, isLoading } = useUsers();
  const { data: clients } = useClients();
  const assignRole = useAssignRole();
  const removeRole = useRemoveRole();
  const assignClientAccess = useAssignClientAccess();
  const removeClientAccess = useRemoveClientAccess();

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedClient, setSelectedClient] = useState<string>("");

  const { data: clientAccess } = useClientAccess(selectedUser || "");

  const availableRoles = ["admin", "manager", "sales", "viewer"];

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
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage user roles and client access permissions
          </p>
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedUser(user.id)}
                          >
                            <Shield className="h-4 w-4 mr-2" />
                            Manage
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Manage User: {user.email}</DialogTitle>
                            <DialogDescription>
                              Assign roles and client access
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6">
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
                          </div>
                        </DialogContent>
                      </Dialog>
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
