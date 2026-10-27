# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

링크나무: Linktree처럼 내 모든 링크를 한 페이지에 모아두고 하나의 URL로 공유할 수 있는 서비스입니다. 요구사항은 `PRD.md` 참고.

## 기술 스택

- Next.js 14 (App Router)
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 명령어

```bash
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드 (타입 체크 + 린트 포함)
npm run lint
```

테스트는 없습니다. `npm run build`와 실제 화면으로 확인합니다.

## 구조

- 프로필과 링크 목록은 DB가 아니라 `src/data/site.ts`에 있습니다. 관리자 화면은 없고, 이 파일을 수정해 내용을 바꿉니다.
- 링크 카드는 원래 URL이 아니라 `/go/{id}`로 연결됩니다. `src/app/go/[id]/route.ts`가 클릭 수를 MongoDB `clicks` 컬렉션(`_id` = 링크 id)에 기록한 뒤 리다이렉트합니다. 링크의 `id`를 바꾸면 기존 클릭 수와 연결이 끊깁니다.
- `MONGODB_URI`가 없거나 DB 연결에 실패해도 링크 이동은 동작해야 합니다. `recordClick`은 에러를 기록만 하고 넘깁니다.
- 다크모드는 Tailwind `darkMode: "class"` 방식입니다. `layout.tsx`의 인라인 스크립트가 첫 렌더 전에 `<html class="dark">`를 적용하고(저장된 선택이 우선, 없으면 시스템 설정), `ThemeToggle`이 전환 결과를 `localStorage`의 `theme`에 저장합니다.

## 코드 규칙

- TypeScript 사용
- 컴포넌트는 `src/components/` 아래에 작성
- 환경 변수는 `.env.local`에 저장 (절대 커밋하지 않음). 필요한 키는 `.env.local.example` 참고
- 모바일 우선 반응형 디자인
