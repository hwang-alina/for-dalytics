import {readString} from "react-papaparse";

const replaceWithZero = (number) => number < 0 ? 0 : number;

const parseData = (fileString) => {
    const parsedData = readString(fileString).data;
    const slicedData = parsedData.slice(1).map(d => d.slice(1))
    return slicedData
}

export const parseGridData = fileString => parseData(fileString).map(d => ({
    'id': d[0],
    'name': d[1],
    'date': d[2],
    'countSales': d[3],
    'moneySales': d[4],
    'inStock': d[5]
}));

export const parseChartData = fileString => parseData(fileString).map(d => ({
    'date': d[2],
    'countSales': replaceWithZero(d[3]),
    'moneySales': replaceWithZero(d[4]),
    'inStock': d[5]
}));
