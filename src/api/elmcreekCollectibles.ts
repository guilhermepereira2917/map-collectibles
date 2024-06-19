import { LatLngExpression } from "leaflet";
import { MAP_GAP_X, MAP_GAP_Y, MAP_UNITS } from "./constants";
import { remap } from "./utils";

export enum FarmingSimulatorMap {
  ElmCreek,
  HautBeyleron,
  // Erlengrat
}

export const FarmingSimulatorMapsLabel: Map<FarmingSimulatorMap, string> = new Map([
  [FarmingSimulatorMap.ElmCreek, 'Elm Creek'],
  [FarmingSimulatorMap.HautBeyleron, 'Haut-Beyleron'],
  // [FarmingSimulatorMap.Erlengrat, 'Erlengrat'],
]);

export interface ElmcreekCollectible {
  x: number,
  y: number,
  type: FarmingSimulatorCollectibleType,
  color?: ElmcreekCollectibleColor,
  collected: boolean,
}

export enum FarmingSimulatorCollectibleType {
  Tractor,
  Plow,
  Seeder,
  WaterTrailer,
  Harvester,
  Trailer,
  Pig,
  Sheep,
  Cow,
  Horse,

  Cartridge,
};

export const farmingSimulatorMapCollectiblesTypes: Map<FarmingSimulatorMap, FarmingSimulatorCollectibleType[]> = new Map([
  [FarmingSimulatorMap.ElmCreek, [
    FarmingSimulatorCollectibleType.Tractor,
    FarmingSimulatorCollectibleType.Plow,
    FarmingSimulatorCollectibleType.Seeder,
    FarmingSimulatorCollectibleType.WaterTrailer,
    FarmingSimulatorCollectibleType.Harvester,
    FarmingSimulatorCollectibleType.Trailer,
    FarmingSimulatorCollectibleType.Pig,
    FarmingSimulatorCollectibleType.Sheep,
    FarmingSimulatorCollectibleType.Cow,
    FarmingSimulatorCollectibleType.Horse
  ]],
  [FarmingSimulatorMap.HautBeyleron, [FarmingSimulatorCollectibleType.Cartridge]]
]);

export enum ElmcreekCollectibleColor {
  Red,
  Orange,
  Yellow,
  Lime,
  Green,
  Cyan,
  Azure,
  Blue,
  Violet,
  Magenta
}

const ELMCREEK_MAX_Y = 2050;
const ELMCREEK_MAX_X = 2050;

export function createPosition(x: number, y: number): LatLngExpression {
  const invertedY = Math.abs(ELMCREEK_MAX_Y - y);
  const correctedY = remap(invertedY, 0, ELMCREEK_MAX_Y, 0, MAP_UNITS - (MAP_GAP_Y * 2));
  const correctedX = remap(x, 0, ELMCREEK_MAX_X, 0, MAP_UNITS - (MAP_GAP_X * 2));

  return [correctedY + MAP_GAP_Y, correctedX + MAP_GAP_X];
}

const elmcreekCollectibles: ElmcreekCollectible[] = [
  { x: 1951, y: 536, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 439, y: 1440, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 564, y: 819, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1234, y: 280, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1179, y: 344, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 895, y: 87, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1305, y: 490, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 424, y: 1370, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1527, y: 1810, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1419, y: 231, type: FarmingSimulatorCollectibleType.Tractor, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1404, y: 174, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1305, y: 490, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1185, y: 2002, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1926, y: 1525, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 227, y: 394, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1153, y: 417, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 224, y: 1987, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1080, y: 213, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1437, y: 194, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1363, y: 1078, type: FarmingSimulatorCollectibleType.Plow, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1343, y: 1074, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1409, y: 1146, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 411, y: 662, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1063, y: 987, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1211, y: 90, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1454, y: 176, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1410, y: 1076, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 151, y: 1570, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1655, y: 1133, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 461, y: 1422, type: FarmingSimulatorCollectibleType.Seeder, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1091, y: 973, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1907, y: 1520, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1549, y: 253, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1157, y: 1621, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1873, y: 2002, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1142, y: 402, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1236, y: 124, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1192, y: 1468, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1354, y: 256, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1577, y: 1709, type: FarmingSimulatorCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1456, y: 173, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1081, y: 363, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 121, y: 402, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1876, y: 1062, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1990, y: 1090, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1211, y: 92, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 308, y: 1590, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1066, y: 1476, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1496, y: 294, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1356, y: 1560, type: FarmingSimulatorCollectibleType.Harvester, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 2010, y: 857, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1963, y: 1531, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1564, y: 169, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1657, y: 180, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1926, y: 1547, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 417, y: 1596, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 27, y: 769, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1078, y: 1965, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1229, y: 1967, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 908, y: 50, type: FarmingSimulatorCollectibleType.Trailer, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1557, y: 236, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1226, y: 1968, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 970, y: 801, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1980, y: 1998, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1988, y: 1852, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1485, y: 481, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1540, y: 1667, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1599, y: 1559, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1980, y: 1998, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1192, y: 1468, type: FarmingSimulatorCollectibleType.Pig, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1266, y: 1072, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1485, y: 481, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 690, y: 1562, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 472, y: 1300, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1599, y: 1559, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1088, y: 649, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 744, y: 136, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1958, y: 136, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 441, y: 651, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 82, y: 1109, type: FarmingSimulatorCollectibleType.Sheep, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1599, y: 1559, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1859, y: 457, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 67, y: 1856, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 442, y: 691, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1485, y: 481, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 690, y: 1562, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1217, y: 2007, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 238, y: 2007, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1564, y: 169, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 677, y: 568, type: FarmingSimulatorCollectibleType.Cow, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1279, y: 294, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1011, y: 1984, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1485, y: 481, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 27, y: 769, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 2030, y: 1177, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1297, y: 182, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 18, y: 89, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1189, y: 1057, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 18, y: 89, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 690, y: 1562, type: FarmingSimulatorCollectibleType.Horse, color: ElmcreekCollectibleColor.Magenta, collected: false },
];

const hautBeyleronCollectibles: ElmcreekCollectible[] = [
  { x: 203, y: 1266, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 90, y: 822, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 583, y: 368, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1277, y: 692, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1249, y: 954, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1293, y: 924, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1348, y: 910, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1140, y: 983, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1030, y: 1014, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1223, y: 1056, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1078, y: 1348, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 851, y: 1045, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 753, y: 872, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1582, y: 941, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1571, y: 809, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1755, y: 950, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1232, y: 188, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 570, y: 177, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 128, y: 70, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
  { x: 1415, y: 1892, type: FarmingSimulatorCollectibleType.Cartridge, collected: false },
];

export const farmingSimulatorMapCollectibles: Map<FarmingSimulatorMap, ElmcreekCollectible[]> = new Map([
  [FarmingSimulatorMap.ElmCreek, elmcreekCollectibles],
  [FarmingSimulatorMap.HautBeyleron, hautBeyleronCollectibles],
]);

export default elmcreekCollectibles;
