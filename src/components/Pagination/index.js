import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


function CustomPagination({ totalPages, currentPage, onPageChange }) {
  const items = [];

  // Add Pagination.Item for each page
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination >
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} />
      {items}
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} />
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
}

export default CustomPagination;
