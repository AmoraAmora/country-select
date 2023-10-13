import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const { NEXT_PUBLIC_COUNTRY_SERVER_URL } = process.env;

const config: CodegenConfig = {
  schema: NEXT_PUBLIC_COUNTRY_SERVER_URL,
  generates: {
    'introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },

    "./src/lib/generated/graphql.ts": {
      documents: './src/**/*.gql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        useIndexSignature: true,
        ignoreNoDocuments: true,
        withHooks: true,
        maybeValue: 'T',
        withResultType: true,
      },
    },
  },
};
export default config;
