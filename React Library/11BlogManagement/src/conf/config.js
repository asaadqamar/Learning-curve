const conf = {
  appwriteurl: String(import.meta.env.EZST_APPWRITE_ENDPOINT),
  appwritProjectId: String(import.meta.env.EZST_APPWRITE_PROJECT_ID),
  appwriteDbId: String(import.meta.env.EZST_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.EZST_APPWRITE_DB_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.EZST_APPWRITE_BUCKET_ID),
};

export default conf;
