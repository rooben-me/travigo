import Head from "next/head";

import Layouts from "../../components/Layouts";
import RoomDetails from "../../components/room/RoomDetails";

import { getRoomDetails } from "../../redux/actions/roomsActions";
import { wrapper } from "../../redux/store";

export default function roomDetailsPage() {
  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Monda:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layouts>
        <RoomDetails />
      </Layouts>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, params, store }) => {
    await store.dispatch(getRoomDetails(req, params.id));
  }
);
