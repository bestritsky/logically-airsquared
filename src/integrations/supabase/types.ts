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
          created_by: string | null
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
          created_by?: string | null
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
          created_by?: string | null
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
            foreignKeyName: "generated_emails_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
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
