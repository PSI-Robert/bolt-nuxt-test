export interface RuntimeConfig {
   public: {
      apiBase: string;
      environment: string;
   };
   private: {
      apiSecret: string;
   };
}
