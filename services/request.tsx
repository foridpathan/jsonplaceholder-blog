import axios from "axios";

export const getRequestParallel = async (url: string) => {
  return await axios({
    method: "GET",
    url: url,
  });
};

export const ParallelApiCalling = async (promise: any) => {
  try {
    return await Promise.all(promise);
  } catch (err) {
    return err;
  }
};

export const getQueryRequest = async (url: string) => {
  try {
    const { data: response } = await axios({
      method: "GET",
      url: url,
    });

    return response;
  } catch (err: any) {
    return {
      success: false,
      status_code: 5001,
      message: err.message,
    };
  }
};
