// 페이지에 표시할 프로필과 링크. 이 파일만 수정하면 내용이 바뀝니다.

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로 (예: "/avatar.png") 또는 외부 이미지 URL. 비우면 이름 첫 글자를 표시
  avatar: string;
};

export type LinkItem = {
  // 클릭 수 집계 키이자 /go/{id} 경로. 바꾸면 기존 클릭 수와 연결이 끊김
  id: string;
  title: string;
  url: string;
  description?: string;
};

// TODO: 아래는 화면 확인용 더미 값. 실제 프로필·링크로 교체할 것
export const profile: Profile = {
  name: "김클로",
  bio: "세계최강 바이브 코더",
  avatar: "/avatar-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/", description: "코드와 프로젝트" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/", description: "경력과 이력" },
  { id: "blog", title: "Blog", url: "https://velog.io/", description: "개발 이야기" },
];
