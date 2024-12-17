"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetDoctorById = ({ id }: { id: string }) => {
  return useQuery({
    queryFn: () =>
      gql.GetDoctorById({
        id,
      }),
    queryKey: ["doctor_by_id"],
  });
};

export { useGetDoctorById };
