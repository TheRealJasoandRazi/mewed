import React from "react";
import { ImageList, ImageListItem, Stack, ImageListItemBar } from "@mui/material";

function List({ items }) {
  return (
    <Stack spacing={0} direction="row" sx={{ overflowX: "auto" }}>
      <ImageList
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {items.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              flex: "0 0 auto",
              width: "60%",
              overflowY: "hidden",
              margin: "0",
              height: "40vh",
              position: "relative",
              "&:hover .item-bar": {
                opacity: 1,
              },
            }}
          >
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
             <ImageListItemBar
              title={item.desc}
              position="bottom"
              className="item-bar"
              sx={{ background: "rgba(0, 0, 0, 0.5)", opacity: 0, transition: "opacity 0.3s" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

export default List;
