import {
  Heading,
  Table,
  Tr,
  Td,
  Tbody,
  TableCaption,
  Thead,
  Th,
} from "@chakra-ui/react";
import * as React from "react";

export const Settings: React.FC = () => {
  return (
    <>
      <Table>
        <TableCaption>All peers found</TableCaption>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>PeerID</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Username</Td>
            <Td>Deprecated</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};
