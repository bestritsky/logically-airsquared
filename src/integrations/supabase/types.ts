export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      client_access: {
        Row: {
          client_id: number
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          client_id: number
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          client_id?: number
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_access_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          assigned_to: string | null
          created_at: string
          deal_size: string | null
          domain: string | null
          id: number
          industry: string | null
          linkedin_url: string | null
          location: string | null
          name: string
          sector: string | null
          status: string | null
          tier: number | null
          timeline: string | null
          updated_at: string
          win_rate: number | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          deal_size?: string | null
          domain?: string | null
          id?: number
          industry?: string | null
          linkedin_url?: string | null
          location?: string | null
          name: string
          sector?: string | null
          status?: string | null
          tier?: number | null
          timeline?: string | null
          updated_at?: string
          win_rate?: number | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          deal_size?: string | null
          domain?: string | null
          id?: number
          industry?: string | null
          linkedin_url?: string | null
          location?: string | null
          name?: string
          sector?: string | null
          status?: string | null
          tier?: number | null
          timeline?: string | null
          updated_at?: string
          win_rate?: number | null
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          body_template: string
          created_at: string
          id: string
          influence_principle: Database["public"]["Enums"]["influence_principle"]
          is_active: boolean
          name: string
          psychology_explanation: string
          subject_template: string
          success_rate: number | null
          updated_at: string
          use_case: string
          variables_schema: Json
          when_to_use: string | null
        }
        Insert: {
          body_template: string
          created_at?: string
          id?: string
          influence_principle: Database["public"]["Enums"]["influence_principle"]
          is_active?: boolean
          name: string
          psychology_explanation: string
          subject_template: string
          success_rate?: number | null
          updated_at?: string
          use_case: string
          variables_schema?: Json
          when_to_use?: string | null
        }
        Update: {
          body_template?: string
          created_at?: string
          id?: string
          influence_principle?: Database["public"]["Enums"]["influence_principle"]
          is_active?: boolean
          name?: string
          psychology_explanation?: string
          subject_template?: string
          success_rate?: number | null
          updated_at?: string
          use_case?: string
          variables_schema?: Json
          when_to_use?: string | null
        }
        Relationships: []
      }
      generated_emails: {
        Row: {
          body: string
          client_id: number
          contact_email: string
          contact_name: string
          created_at: string
          created_by: string
          exported_at: string | null
          id: string
          influence_principle: Database["public"]["Enums"]["influence_principle"]
          notes: string | null
          opportunity_id: string | null
          status: Database["public"]["Enums"]["email_status"]
          subject: string
          template_id: string | null
          template_variables: Json
          updated_at: string
        }
        Insert: {
          body: string
          client_id: number
          contact_email: string
          contact_name: string
          created_at?: string
          created_by?: string
          exported_at?: string | null
          id?: string
          influence_principle: Database["public"]["Enums"]["influence_principle"]
          notes?: string | null
          opportunity_id?: string | null
          status?: Database["public"]["Enums"]["email_status"]
          subject: string
          template_id?: string | null
          template_variables?: Json
          updated_at?: string
        }
        Update: {
          body?: string
          client_id?: number
          contact_email?: string
          contact_name?: string
          created_at?: string
          created_by?: string
          exported_at?: string | null
          id?: string
          influence_principle?: Database["public"]["Enums"]["influence_principle"]
          notes?: string | null
          opportunity_id?: string | null
          status?: Database["public"]["Enums"]["email_status"]
          subject?: string
          template_id?: string | null
          template_variables?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_client"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_opportunity"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "opportunities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "generated_emails_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      opportunities: {
        Row: {
          client_id: number
          created_at: string
          description: string | null
          drivers: string[] | null
          id: string
          name: string
          service_type: string
          timeline: string | null
          updated_at: string
          win_rate: number | null
          year1_revenue: number | null
          year2_revenue: number | null
          year3_revenue: number | null
        }
        Insert: {
          client_id: number
          created_at?: string
          description?: string | null
          drivers?: string[] | null
          id: string
          name: string
          service_type: string
          timeline?: string | null
          updated_at?: string
          win_rate?: number | null
          year1_revenue?: number | null
          year2_revenue?: number | null
          year3_revenue?: number | null
        }
        Update: {
          client_id?: number
          created_at?: string
          description?: string | null
          drivers?: string[] | null
          id?: string
          name?: string
          service_type?: string
          timeline?: string | null
          updated_at?: string
          win_rate?: number | null
          year1_revenue?: number | null
          year2_revenue?: number | null
          year3_revenue?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "opportunities_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "manager" | "sales" | "viewer"
      email_status: "Draft" | "Ready" | "Exported" | "Archived"
      influence_principle:
        | "Reciprocation"
        | "Liking"
        | "Social Proof"
        | "Authority"
        | "Scarcity"
        | "Commitment/Consistency"
        | "Unity"
        | "Instant Influence"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "manager", "sales", "viewer"],
      email_status: ["Draft", "Ready", "Exported", "Archived"],
      influence_principle: [
        "Reciprocation",
        "Liking",
        "Social Proof",
        "Authority",
        "Scarcity",
        "Commitment/Consistency",
        "Unity",
        "Instant Influence",
      ],
    },
  },
} as const
