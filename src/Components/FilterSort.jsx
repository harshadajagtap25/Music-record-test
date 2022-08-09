import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const initialSortByParams = searchParams.get("sortBy");

  const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy, setSortBy] = useState(initialSortByParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];

    if (category.includes(option)) {
      //remove
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      // add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    if (category || sortBy) {
      const params = {}
      //if params are there then only setSearchParams
      category && (params.genre = category);
      sortBy && (params.sortBy = sortBy)
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);
  //   console.log(searchParams.getAll("genre"));
  return (
    <Box textAlign={"left"} m={"10px"}>
      <Text fontSize={"25px"}>Filteration</Text>

      <div>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"K-Pop"}
            defaultChecked={category.includes("K-Pop")}
          />
          <label>K-Pop</label>
        </HStack>

        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Country"}
            defaultChecked={category.includes("Country")}
          />
          <label>Country</label>
        </HStack>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Pop"}
            defaultChecked={category.includes("Pop")}
          />

          <label>Pop</label>
        </HStack>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Hard Rock"}
            defaultChecked={category.includes("Hard Rock")}
          />
          <label>Hard Rock</label>
        </HStack>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Holiday"}
            defaultChecked={category.includes("Holiday")}
          />
          <label>Holiday</label>
        </HStack>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Heavy Metal"}
            defaultChecked={category.includes("Heavy Metal")}
          />
          <label>Heavy Metal</label>
        </HStack>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Classical Crossover"}
            defaultChecked={category.includes("Classical Crossover")}
          />
          <label>Classical Crossover</label>
        </HStack>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Rock"}
            defaultChecked={category.includes("Rock")}
          />
          <label>Rock</label>
        </HStack>
        <HStack>
          <input
            type="checkbox"
            onChange={handleGenreChange}
            value={"Christmas"}
            defaultChecked={category.includes("Christmas")}
          />
          <label>Christmas</label>
        </HStack>
      </div>

      <Text fontSize={"25px"}>Sorting</Text>

      <div>
        <HStack>
          <input
            defaultChecked={sortBy === "asc"}
            onChange={handleSort}
            type="radio"
            value="asc"
            name="sortBy"
          />
          <label>Ascending</label>
        </HStack>
        <HStack>
          <input
            defaultChecked={sortBy === "desc"}
            onChange={handleSort}
            type="radio"
            value="desc"
            name="sortBy"
          />
          <label>Decending</label>
        </HStack>
      </div>
    </Box>
  );
};

export default FilterSort;
