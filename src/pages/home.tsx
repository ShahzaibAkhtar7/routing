import Hero from "../Component/Hero/Hero";
import Crypto from "../Component/Crypto/Crypto";
import ExploreCrypto from "../Component/ExploreCrypto/ExploreCrypto";

export default function home() {
    return (
      <div>
        <Hero />
        <Crypto />
        <ExploreCrypto />
      </div>
    )
  }