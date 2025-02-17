export interface Sponsor {
  id: number;
  name: string;
  country: string;
  homepage: string;
  funding?: number;
  projects: number[];
}
const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "ABB Engineering (Shanghai) Ltd.",
    country: "China",
    homepage: "https://new.abb.com/cn",
    funding: 9450877,
    projects: [60, 5, 33, 38, 61],
  },
  {
    id: 2,
    name: "Shanghai Xiteng Electronic Information Technology Co., Ltd.",
    country: "China",
    homepage: "https://www.xiteng.com",
    funding: 4976366,
    projects: [87, 80, 50, 35, 68],
  },
  {
    id: 3,
    name: "Transfar Zhilian Co., Ltd",
    country: "China",
    homepage: "http://www.transfarzl.com",
    funding: 8954254,
    projects: [52, 71, 79, 29, 69],
  },
  {
    id: 4,
    name: "Yiyun Zhiai Technology (Shenzhen) Co., LTD",
    country: "China",
    homepage: "http://www.yiyun.com",
    funding: 6111499,
    projects: [25, 96, 15, 70, 88],
  },
  {
    id: 5,
    name: "Beijing Jijia Technology Co., Ltd",
    country: "China",
    homepage: "http://www.jijia.com",
    funding: 2383765,
    projects: [56, 36, 34, 89, 4],
  },
  {
    id: 6,
    name: "Shanghai Yinhang Information Technology Co., LTD",
    country: "China",
    homepage: "http://www.yinhang.com",
    funding: 6228770,
    projects: [9, 70, 93, 41, 21],
  },
  {
    id: 7,
    name: "Shanghai Xiaoxiliushui Business Consulting Co., LTD",
    country: "China",
    homepage: "http://www.xiaoxiliushui.com",
    funding: 4235816,
    projects: [51, 16, 8, 31, 4],
  },
  {
    id: 8,
    name: "Shanghai NIO Co., Ltd",
    country: "China",
    homepage: "https://www.nio.com",
    funding: 7958264,
    projects: [83, 48, 4, 45, 12],
  },
  {
    id: 9,
    name: "United Automotive Electronic Systems Co., Ltd",
    country: "China",
    homepage: "https://www.uaes.com",
    funding: 5772734,
    projects: [34, 31, 48, 95, 9],
  },
  {
    id: 10,
    name: "Shanghai TechBank Medical Co., Ltd",
    country: "China",
    homepage: "https://www.techbankmed.com",
    funding: 5572688,
    projects: [16, 58, 84, 57, 31],
  },
  {
    id: 11,
    name: "GM (China) Investment Co., Ltd",
    country: "China",
    homepage: "https://www.gmchina.com",
    funding: 8486963,
    projects: [91, 86, 10, 71, 68],
  },
  {
    id: 12,
    name: "Rockwell Automation(China) LTD",
    country: "China",
    homepage: "https://www.rockwellautomation.com",
    funding: 2698957,
    projects: [51, 19, 40, 74, 6],
  },
  {
    id: 13,
    name: "HASCO VISION Technology (Shanghai) Co., Ltd",
    country: "China",
    homepage: "https://www.hascovision.com",
    funding: 3201957,
    projects: [35, 65, 81, 79, 45],
  },
  {
    id: 14,
    name: "Intel Asia Pacific Research and Development Ltd",
    country: "China",
    homepage: "https://www.intel.cn",
    funding: 6553503,
    projects: [68, 60, 38, 92, 53],
  },
  {
    id: 15,
    name: "Hangzhou AIMS Intelligent Technology Co., Ltd",
    country: "China",
    homepage: "http://www.aims.com",
    funding: 4760851,
    projects: [72, 46, 83, 21, 32],
  },
  {
    id: 16,
    name: "Beijing Builderx Intelligent Technology Co., Ltd",
    country: "China",
    homepage: "http://www.builderx.com",
    funding: 2682804,
    projects: [6, 92, 44, 76, 40],
  },
  {
    id: 17,
    name: "Shenzhen Sunway Communication CO., LTD",
    country: "China",
    homepage: "http://www.sunway.com",
    funding: 4331400,
    projects: [37, 10, 13, 95, 38],
  },
  {
    id: 18,
    name: "United Automotive Electronic Systems Co., Ltd",
    country: "China",
    homepage: "https://www.uaes.com",
    funding: 4395792,
    projects: [50, 18, 13, 32, 31],
  },
  {
    id: 19,
    name: "Bosch (Shanghai) Smart Life Technology Ltd.(RBLC)",
    country: "China",
    homepage: "https://www.bosch.com.cn",
    funding: 1155804,
    projects: [46, 84, 11, 51, 94],
  },
  {
    id: 20,
    name: "Suzhou Sophoton Tech Co. Ltd",
    country: "China",
    homepage: "http://www.sophoton.com",
    funding: 2363240,
    projects: [40, 14, 42, 54, 91],
  },
  {
    id: 21,
    name: "Shanghai Nexmaterials Technology Co. Ltd",
    country: "China",
    homepage: "http://www.nexmaterials.com",
    funding: 7007589,
    projects: [57, 40, 99, 11, 58],
  },
  {
    id: 22,
    name: "ChinaScope (Shanghai) Techno Co. Ltd",
    country: "China",
    homepage: "http://www.chinascope.com",
    funding: 1644645,
    projects: [2, 95, 76, 25, 84],
  },
  {
    id: 23,
    name: "Beijing TerraQuanta Technology Co. Ltd",
    country: "China",
    homepage: "http://www.terraquanta.com",
    funding: 6482613,
    projects: [85, 37, 68, 77, 18],
  },
  {
    id: 24,
    name: "Beijing Builderx Intelligent Technology Co., Ltd",
    country: "China",
    homepage: "http://www.builderx.com",
    funding: 2682804,
    projects: [6, 92, 44, 76, 40],
  },
  {
    id: 25,
    name: "Shanghai United Imaging Healthcare Co. Ltd",
    country: "China",
    homepage: "http://www.united-imaging.com",
    funding: 6390302,
    projects: [47, 51, 59, 68, 87],
  },
  {
    id: 26,
    name: "Mega Phase Industrial Inspection Technology (Shanghai) Co. Ltd",
    country: "China",
    homepage: "http://www.megaphase.com",
    funding: 6802464,
    projects: [53, 17, 56, 54, 13],
  },
  {
    id: 27,
    name: "Hangzhou AIMS Intelligent Technology Co. Ltd",
    country: "China",
    homepage: "http://www.aims.com",
    funding: 3687566,
    projects: [87, 22, 55, 77, 36],
  },
  {
    id: 28,
    name: "VMware Information Technology (China) Co. Ltd",
    country: "China",
    homepage: "https://www.vmware.com/cn",
    funding: 7929368,
    projects: [83, 53, 35, 97, 67],
  },
];

const getSponsor = (sponsorId: number): Sponsor | undefined => {
  console.log("Searching for sponsor ID:", sponsorId);
  const sponsor = sponsors.find((sponsor) => sponsor.id === sponsorId);
  console.log("Found sponsor:", sponsor);
  return sponsor;
};

export { sponsors, getSponsor };
