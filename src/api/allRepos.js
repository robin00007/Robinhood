import axios from "axios";
import { useState } from "react";

const AllRepos = async () => {
  const res = await axios({
    method: "get",
    headers: {
      authorization: "bearer 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",
    },
    url: "https://api.github.com/user/repos",
  });

  return res.data;
};

export default AllRepos;
