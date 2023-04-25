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
