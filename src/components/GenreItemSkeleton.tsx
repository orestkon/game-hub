import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <HStack spacing={4}>
      <Skeleton height={"32px"} width={"32px"} borderRadius={8} />

      <SkeletonText
        noOfLines={1}
        skeletonHeight="14px" // Approximately matches 'lg' font size
        width="100px" // Provide a realistic, fixed width for the genre name
      />
    </HStack>
  );
};

export default GenreItemSkeleton;
