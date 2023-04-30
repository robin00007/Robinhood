import axios from "axios";

const PinnedRepo = async () => {
  const result = await axios({
    method: "post",
    // headers: {
    //   authorization: "bearer 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",
    // },
    url: "https://gh-pinned-repos.egoist.dev/",
    data: {
      params:{
        username: "robin00007",
      }
    },
  });
  return result.data;
};
export default PinnedRepo;
