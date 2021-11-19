import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from "@giphy/react-components";
import { useState } from "react";
import { useAsync } from "react-async-hook";

const gf = new GiphyFetch("oW0VXSxqLF9GYLy5XFqTykhmPXzBvf0A");

const GifContainer = ({ name }) => {
  const [gif, setGif] = useState(null);
  useAsync(async () => {
    const { data } = await gf.random({ tag: "Chuck Norris" });
    setGif(data);
  }, [name]);
  return (
    <div className="grid grid-cols-1 gap-4">
      {gif && <Gif gif={gif} width={800} className="mx-auto" />}
    </div>
  );
};

export default GifContainer;
