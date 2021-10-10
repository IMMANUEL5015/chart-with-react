import moment from "moment";

class GraphUtils {
  static getLabels(data = []) {
    const { convertUnixToDate, filterInValidWeightType } = GraphUtils;
    const labels = filterInValidWeightType(data).map((item) =>
      convertUnixToDate(item.startTime)
    );
    return labels;
  }

  static convertUnixToDate(time) {
    const timeValue = moment(time).format("h: A");
    return timeValue;
  }

  static filterInValidWeightType(data = []) {
    return data.filter((item) => item.dispatchStopWeightChangeType !== "NONE");
  }

  static getDataInWeight(data = []) {
    const { filterInValidWeightType } = GraphUtils;
    const weights = filterInValidWeightType(data).map((item) =>
      Number(item.totalWeightChange)
    );
    return weights;
  }
}

export default GraphUtils;
