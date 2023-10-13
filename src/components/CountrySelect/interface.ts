import { CountryDataFragment } from "@/lib/generated/graphql";

export interface CountrySelectProps {
  value: CountryDataFragment | null | undefined
  onChange: (value: CountryDataFragment | null | undefined) => void
}