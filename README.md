# 🌳 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스.

## 시작하기

```bash
npm install
cp .env.local.example .env.local   # MONGODB_URI 입력 (없어도 페이지는 동작)
npm run dev                        # http://localhost:3000
```

## 내용 수정

`src/data/site.ts`에서 이름, 소개, 프로필 사진, 링크 목록을 수정합니다.
프로필 사진은 `public/` 폴더에 넣고 `avatar: "/avatar.png"`처럼 지정하세요.

## 클릭 수 확인

링크별 클릭 수는 MongoDB Atlas의 `linknamu` DB → `clicks` 컬렉션에 저장됩니다 (`_id` = 링크 id, `count` = 클릭 수).

## 배포 (Vercel)

1. GitHub에 push한 뒤 Vercel에서 저장소를 import
2. Environment Variables에 `MONGODB_URI` 추가
3. MongoDB Atlas의 Network Access에서 Vercel 접속을 허용 (`0.0.0.0/0`)
