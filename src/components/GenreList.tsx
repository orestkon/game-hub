import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/imageUrl";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY={"5px"}>
            <GenreItemSkeleton key={skeleton} />
          </ListItem>
        ))}
      {!isLoading &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
