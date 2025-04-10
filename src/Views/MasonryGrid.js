// MasonryGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../masonry-grid.scss';

const MasonryGrid = ({ images, columns = 3 }) => {
  const [columnImages, setColumnImages] = useState([]);
  const [currentColumns, setCurrentColumns] = useState(columns);
  const gridRef = useRef(null);

  // Function to calculate the optimal number of columns based on screen width
  const calculateOptimalColumns = () => {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return Math.min(3, columns);
    return columns;
  };

  // Distribute images among columns based on aspect ratio for balanced height
  const organizeImages = (colCount) => {
    // Initialize column heights and contents
    const columnHeights = Array(colCount).fill(0);
    const columnContents = Array(colCount).fill().map(() => []);

    // Distribute images to columns (greedy algorithm)
    images.forEach((image) => {
      // Find column with the smallest height
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));

      // Add image to that column
      columnContents[shortestColumnIndex].push(image);

      // Update column height (using aspect ratio as a proxy for rendered height)
      const aspectRatio = image.height / image.width;
      columnHeights[shortestColumnIndex] += aspectRatio;
    });

    setColumnImages(columnContents);
  };

  // Handle resize event with debounce
  const handleResize = () => {
    const optimalColumns = calculateOptimalColumns();
    if (optimalColumns !== currentColumns) {
      setCurrentColumns(optimalColumns);
    }
  };

  // Initialize masonry grid on component mount and when images or columns change
  useEffect(() => {
    if (images && images.length > 0) {
      const optimalColumns = calculateOptimalColumns();
      setCurrentColumns(optimalColumns);
    }
  }, [images, columns]);

  // Reorganize when currentColumns changes
  useEffect(() => {
    if (images && images.length > 0 && currentColumns > 0) {
      organizeImages(currentColumns);
    }
  }, [currentColumns, images]);

  // Set up resize handler
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentColumns]);

  // Render the masonry grid
  return (
    <div className="masonry-grid" ref={gridRef}>
      {columnImages.map((column, columnIndex) => (
        <div
          key={`column-${columnIndex}`}
          className="masonry-grid__column"
          style={{ width: `${100 / columnImages.length}%` }}
        >
          {column.map((image, imageIndex) => (
            <div
              key={`image-${columnIndex}-${imageIndex}`}
              className="masonry-grid__item"
            >
              <img
                src={image.src}
                alt={`Image ${imageIndex + 1}`}
                loading="lazy"
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
