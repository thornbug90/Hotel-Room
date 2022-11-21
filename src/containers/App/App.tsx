import React, { useEffect } from "react";
import { ConnectedProps } from "react-redux";
import { Header } from "components";
import withErrorHandler from "hocs/withErrorHandler";
import connector from "./connector";
import Tab from "components/Tab";
import RoomInfo from "components/RoomInfo";
import RoomDetail from "components/RoomDetail";
import RoomAction from "components/RoomAction";
import apis from "apis/apis";

type TypeAppReduxProps = ConnectedProps<typeof connector>;

const App: React.FC<TypeAppReduxProps> = (props: TypeAppReduxProps) => {
  useEffect(() => {
    apis.getRoomIds("fdsa", "ewta").then((res) => {
      console.log("fdsafdsafdsa", res);
    });
  }, []);

  return (
    <>
      <Header title="Room Dashborad" username="AN" />
      <Tab
        tablist={[
          { id: 0, label: "One" },
          { id: 1, label: "Two" },
          { id: 2, label: "Three" },
          { id: 3, label: "Four" },
          { id: 4, label: "Five" },
          { id: 5, label: "Six" },
        ]}
      />
      <RoomInfo />
      <img
        src="https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU="
        alt="Room"
        loading="lazy"
      />
      <RoomDetail
        booked={true}
        balance={1234}
        description="Arrival Date - Depature Date"
      />
      <RoomAction
        guests={{
          adult: ["Adult1", "Adult2"],
          children: ["Child1"],
        }}
      />
    </>
  );
};

export default withErrorHandler(connector(App));
