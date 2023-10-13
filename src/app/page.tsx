"use client";

import CountrySelect from "@/components/CountrySelect";
import { CountryDataFragment } from "@/lib/generated/graphql";
import { Box, Container, Typography } from "@mui/material";
import { FC, useState } from "react";

const HomePage: FC = () => {
  const [country, setCountry] = useState<CountryDataFragment | undefined | null>()

  const handleSelect = (val: CountryDataFragment | undefined | null) => {
    setCountry(val)
  }

  return (
    <Container>
      <Typography variant="h3">Country Search</Typography>
      <Box sx={{mt: 4}}>
        <CountrySelect value={country} onChange={handleSelect} />
      </Box>
    </Container>
  );
};

export default HomePage;
