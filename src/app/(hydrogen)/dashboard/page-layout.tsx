'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import FileGrid from '@/app/shared/file/manager/file-grid';
import FileListTable from '@/app/shared/file/manager/file-list/table';

export default function PageLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
  const searchParams = useSearchParams();
  const layout = searchParams.get('layout');
  const isGridLayout = layout?.toLowerCase() === 'grid';
  
  return isGridLayout ? <FileGrid /> : <FileListTable />;
}

