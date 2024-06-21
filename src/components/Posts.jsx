import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchApiData } from '../api/fetchApiData'; // Ensure the correct path

const Posts = ({ loading, error, data, fetchApiData }) => {
  useEffect(() => {
    fetchApiData();
  }, [fetchApiData]);

  console.log(data); // Verify the data is logged
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              style={{
                width: '80%',
                height: '50%',
                padding: '20px',
                border: '1px solid dodgerblue',
                margin: '20px',
              }}
            >
              <li>{item.title}</li>
              <li>{item.body}</li>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  data: state.data,
});

const mapDispatchToProps = {
  fetchApiData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
