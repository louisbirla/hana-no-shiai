import * as React from "react";
import { Input } from "@chakra-ui/react";

export const NicknameEditor: React.FC<{
  nickname: string;
  setNickname: (newUsername: string) => void;
}> = ({ nickname, setNickname }) => {
  return (
    <Input
      value={nickname}
      onChange={(e) => setNickname(e.target.value.trim())}
      placeholder="Nickname"
      size="sm"
      width="xs"
    />
  );
};
