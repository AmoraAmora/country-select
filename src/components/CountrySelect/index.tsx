"use client";

import React, { useState } from "react"
import { Autocomplete, Box, TextField } from "@mui/material"

import { useCountry } from "./hooks/useCountry";
import { CountrySelectProps } from "./interface";

const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const { search, data: countries } = useCountry()
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (val: string) => {
    search(val)
    setInputValue(val)
  }

  console.log(countries)

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => {
        onChange(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        handleInputChange(newInputValue);
      }}
      getOptionLabel={(option) => option.name}
      id="country-select"
      options={countries}
      autoHighlight
      sx={{ width: 300 }}
      filterOptions={(options, _) => options}
      renderInput={(params) => <TextField {...params} label="Country" />}
      renderOption={(props, option, i) => (
        <Box component="li" {...props} key={option.code + i}>
          {option.emoji} {option.name}
        </Box>
      )}
    />
  )
}

export default CountrySelect