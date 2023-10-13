import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { FC, ReactNode } from "react";

import Theme from "@/components/Theme";
import { ApolloWrapper } from "@/lib/apollo-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iYield Frontend Challenge",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <ApolloWrapper>
          <Theme>
            <AppBar>
              <Toolbar>
                <Typography variant="h6" component="div">
                  Frontend Challenge
                </Typography>
              </Toolbar>
            </AppBar>
            <Toolbar />
            <Box sx={{ marginTop: 2 }}>{children}</Box>
          </Theme>
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
