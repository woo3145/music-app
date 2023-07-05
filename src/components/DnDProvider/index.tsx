import React, { useCallback } from 'react';
import { useAppDispatch } from '../../utils/redux/store';
import {
  deleteTrack,
  moveTrack,
} from '../../utils/redux/modules/playlistSlice';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const DnDProvider = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();

  const onDargEndHandler = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      // 목적지가 드래그 영역 밖이면 해당 곡 삭제
      if (!destination) {
        return dispatch(deleteTrack(source.index));
      }
      // 출발지와 목적지가 같으면 변경 x
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return;

      // 그외 플레이 리스트 순서 변경
      dispatch(
        moveTrack({
          sourceIdx: source.index,
          destinationIdx: destination.index,
        })
      );
    },
    [dispatch]
  );

  return (
    <DragDropContext onDragEnd={onDargEndHandler}>{children}</DragDropContext>
  );
};

export default DnDProvider;
