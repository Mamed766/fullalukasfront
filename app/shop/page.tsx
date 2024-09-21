"use client";
import React, { useState, useEffect } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import Categories from "../components/Categories/Categories";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Radio,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [price, setPrice] = useState(5000);
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState<string[]>([]);
  const [collectionType, setCollectionType] = useState<string[]>([]);

  const [filteredData, setFilteredData] = useState([]);

  const fetchFilteredData = async () => {
    try {
      const collectionTypeParam =
        collectionType.length > 0 ? collectionType.join(",") : null;

      const colorParam = color.length > 0 ? color.join(",") : null;
      const materialParam = material ? material : null;
      const maxPriceParam = price !== null ? price : null;

      const response = await axios.get("http://localhost:3001/api/shopitems", {
        params: {
          material: materialParam,
          color: colorParam,
          collectionType: collectionTypeParam,
          minPrice: 0,
          maxPrice: maxPriceParam,
        },
      });
      setFilteredData(response.data.collections);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  useEffect(() => {
    fetchFilteredData();
  }, [price, material, color, collectionType]);

  console.log(filteredData);

  return (
    <>
      <div
        className="pt-[17rem] h-[30rem]"
        style={{
          backgroundImage: `url("https://demo-alukas.myshopify.com/cdn/shop/files/alk_bg_collections.jpg?v=1711247313")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-[40px]">Products</h2>
          <div className="flex items-center">
            <div
              onClick={() => router.push("/home")}
              className="flex items-center text-[#555] cursor-pointer"
            >
              Home <LiaAngleRightSolid />
            </div>
            <div>Products</div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Categories />
      </div>
      <div className="max-w-[1280px] mx-auto mt-20 flex gap-2">
        <aside className="max-w-[15rem] min-w-[15rem]">
          <Accordion allowMultiple>
            {/* 1. Accordion - Collection */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Collection
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup
                  onChange={(value: string[]) => {
                    if (value.includes("All")) {
                      // "All" seçildiyse, diğer filtreleri sıfırla
                      setCollectionType(["All"]);
                      setMaterial("");
                      setColor([]);
                    } else {
                      // "All" seçili değilse
                      setCollectionType(value);
                    }
                  }}
                  value={collectionType}
                >
                  <Stack spacing={2}>
                    <Checkbox value="All">All</Checkbox>
                    <Checkbox value="Modern">Modern</Checkbox>
                    <Checkbox value="Originals">Originals</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            {/* 2. Accordion - Price */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Price
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box mb={4}>Price: ${price}</Box>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={50}
                  min={0}
                  max={5000}
                  onChangeEnd={(val) => setPrice(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </AccordionPanel>
            </AccordionItem>

            {/* 3. Accordion - Material */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Material
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <RadioGroup
                  onChange={(value: string) => {
                    setMaterial(value);
                    if (collectionType.includes("All")) {
                      setCollectionType([]);
                    }
                  }}
                  value={material}
                >
                  <Stack spacing={2}>
                    <Radio value="Bronze">Bronze</Radio>
                    <Radio value="Gold">Gold</Radio>
                    <Radio value="Silver">Silver</Radio>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </AccordionItem>

            {/* 4. Accordion - Colors */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Colors
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup
                  onChange={(value: string[]) => {
                    setColor(value);
                    if (collectionType.includes("All")) {
                      setCollectionType([]);
                    }
                  }}
                  value={color}
                >
                  <Stack spacing={2}>
                    <Checkbox value="Black">Black</Checkbox>
                    <Checkbox value="Red">Red</Checkbox>
                    <Checkbox value="Blue">Blue</Checkbox>
                    <Checkbox value="Green">Green</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </aside>
        <div className="flex flex-wrap gap-2">
          {filteredData.length > 0 ? (
            filteredData.map((collection: any, index: number) => {
              return (
                <div key={index} className="relative group overflow-hidden">
                  <Image
                    alt={collection.title}
                    src={`http://localhost:3001/${collection?.image}`}
                    height={300}
                    width={300}
                    quality={100}
                    objectFit="cover"
                    className="object-cover cursor-pointer"
                  />
                  <div className="absolute cursor-pointer group-hover:right-5 top-3 right-[-4rem] bg-white p-3 rounded-full duration-300">
                    <FaRegHeart />
                  </div>
                  <div className="absolute flex flex-col gap-2 font-medium text-[12px] top-2 left-2 text-start">
                    {collection?.subscription && (
                      <p className="bg-orange-400 px-2">Subscription</p>
                    )}
                    {collection.percent && (
                      <p className="bg-red-500 px-2 text-white max-w-[50px]">
                        -{collection?.percent}%
                      </p>
                    )}
                    {collection?.new && (
                      <p className="bg-blue-500 px-2 text-white max-w-[50px]">
                        New
                      </p>
                    )}
                    {collection?.hot && (
                      <p className="bg-blue-600 px-2 text-white max-w-[50px]">
                        HOT
                      </p>
                    )}
                  </div>
                  <div className="text-center">
                    <h2 className="text-[#555]">{collection?.title}</h2>
                    <p className="font-semibold">{collection?.desc}</p>
                    <p>${collection?.price}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
