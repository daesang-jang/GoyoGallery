export type ExhibitionStatus = 'current' | 'upcoming' | 'past';

export interface Exhibition {
  id: string;
  title: string;
  titleEn?: string;
  artists: string;
  date: string;
  status: ExhibitionStatus;
  image: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: "2",
    title: "OUR LAND SCAPES",
    titleEn: "OUR LAND SCAPES",
    artists: "고성민  권수연  김지훈 오혁진  황영록",
    date: "2026.04.01 - 2026.04.30",
    status: "current", 
    // Stauts 에 값을 past / upcoming / current 로 넣어주면 변경됨
    image: "/images/Home/home260401.png",
    // imges 경로로 넣어주면 됨 (대소문자 고분 필수) 
    // 위의 current 가 끝나면 그대로 복붙하여 하단으로 밀고 status 상태값 변경 / 가장 최신이 가장 위에 쌓이게 쌓으면 됨
    // src-exhibitions-exhibitionsDetail 에서 본문 내용 찾아서 작성 
  },
  {
    id: "1",
    title: "ON VEIW",
    titleEn: "ON VIEW",
    artists: "김산  노현우  이영지  이정용  장세일  최우",
    date: "2025.12.04 - 2026.01.07",
    status: "past", 
    // Stauts 에 값을 past / upcoming / current 로 넣어주면 변경됨
    image: "/images/Home/onview.png",
    // imges 경로로 넣어주면 됨 (대소문자 고분 필수) 
    // 위의 current 가 끝나면 그대로 복붙하여 하단으로 밀고 status 상태값 변경 / 가장 최신이 가장 위에 쌓이게 쌓으면 됨
    // src-exhibitions-exhibitionsDetail 에서 본문 내용 찾아서 작성 
  },
  
  
];

export function getExhibitionById(id: string): Exhibition | undefined {
  return exhibitions.find(ex => ex.id === id);
}

export function getExhibitionsByStatus(status: ExhibitionStatus): Exhibition[] {
  return exhibitions.filter(ex => ex.status === status);
}

export function getCurrentExhibition(): Exhibition | undefined {
  return exhibitions.find(ex => ex.status === 'current');
}
