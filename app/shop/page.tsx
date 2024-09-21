"use client";
import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import Categories from "../components/Categories/Categories";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Input,
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

const page = () => {
  const router = useRouter();
  const [price, setPrice] = useState(50);
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
                <CheckboxGroup>
                  <Stack spacing={2}>
                    <Checkbox>Modern</Checkbox>
                    <Checkbox>Originals</Checkbox>
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
                  max={1000}
                  onChange={(val) => setPrice(val)}
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
                <RadioGroup defaultValue="Bronze">
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
                <CheckboxGroup>
                  <Stack spacing={2}>
                    <Checkbox>Black</Checkbox>
                    <Checkbox>Red</Checkbox>
                    <Checkbox>Blue</Checkbox>
                    <Checkbox>Green</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </aside>
        <div>sadas</div>
      </div>
    </>
  );
};

export default page;
