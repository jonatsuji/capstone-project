import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../../data/lib";
import Header from "../../../../components/Header/Header";
import styled from "styled-components";
import BackArrow from "../../../public/images/back-arrow-white.png";
import Image from "next/image";

export default function Route() {
  const router = useRouter();
  const { singleRoute } = router.query;

  if (!singleRoute) {
    return null;
  }

  const singleRoutes = routes.filter((route) => route.name === singleRoute);
}
