import axios from "axios";

const PinnedRepo = async () => {
  // const obj= {
  //     user(login: "GabrielBB") {
  //       pinnedItems(first: 6, types: REPOSITORY) {
  //         nodes {
  //           ... on Repository {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   };
  const result = await axios({
    method: "post",
    headers: {
      authorization: "bearer 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",
    },
    url: "https://api.github.com/graphql",
    data: {
      query:
        '{\n  user(login: "robin00007") {\n pinnedItems(first: 6, types: REPOSITORY) {\n nodes {\n ... on Repository {\n name\n }\n }\n }\n }\n}',
    },
  });
  return result.data;
};
export default PinnedRepo;
