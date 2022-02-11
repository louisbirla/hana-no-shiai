import * as React from "react";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Friends } from "./friends";
import { Settings } from "./settings";
import { Game } from "./game";

export const PageAtom = atomWithStorage<"game" | "friends" | "settings">(
  "currpage",
  "game"
);

export const Pages: React.FC = () => {
  let [page] = useAtom(PageAtom);
  if (page == "friends") {
    return <Friends />;
  } else if (page == "settings") {
    return <Settings />;
  } else {
    return <Game />;
  }
};
