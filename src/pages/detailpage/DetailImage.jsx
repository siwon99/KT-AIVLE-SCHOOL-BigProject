import React from 'react';
import PropTypes from 'prop-types';

const DetailImages = ({ logData }) => {
  console.log('logData:', logData);
  console.log(logData.cd_log.change_rating_result)

  return (
    <div>
      {logData ? (
        <div>
          <h2>변화 탐지 결과</h2>

          {/* cd 배열에서 이미지 추출 및 렌더링 */}
          {/* 2020년, 2021년 이미지 보여주는 코드 */}
          {logData.cd && logData.cd.length > 0 ? (
            <div>
              {logData.cd.map((log, index) => {
                const yearNames = ['2020년', '2021년', '2022년'];
                const name = yearNames[index % yearNames.length];

                // cd에서 2022년도 사진은 제외
                if (name === '2022년') {
                  return null;
                }

                return (
                  <div key={log.id} className="change-log-image">
                    <p>{name}</p>
                    <img
                      src={log.farm_change_detection_image}
                      alt={`Change Log ${name}`}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>변화 탐지 이미지가 없습니다.</p>
          )}

          {/* cd_log 배열에서 이미지 추출 및 렌더링 */}
          {/* 각각 변화탐지한 이미지 보여주기 */}
          {logData.cd_log && logData.cd_log.length > 0 ? (
            <div>
              {/* 첫 번째 cd_log 항목만 처리 */}
              {logData.cd_log.slice(0, 1).map((log, index) => (
                <div key={log.id} className="change-log-result">
                  {log.farm_change_detection_result_image1 && (
                    <div>
                      <img
                        src={log.farm_change_detection_result_image1}
                        alt={`Result Image 1 ${index + 1}`}
                      />
                      <p>결과 이미지 1</p>
                    </div>
                  )}

                  {log.farm_change_detection_result_image2 && (
                    <div>
                      <img
                        src={log.farm_change_detection_result_image2}
                        alt={`Result Image 2 ${index + 1}`}
                      />
                      <p>결과 이미지 2</p>
                    </div>
                  )}

                  {/* "3년 평균 변화율" 추가 */}
                  <div className="change-rating-result">
                    <span>3년 평균 변화율: <p>{log.change_rating_result !== undefined ? log.change_rating_result : '정보 없음'}</p></span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>변화 탐지 결과 이미지가 없습니다.</p>
          )}
        </div>
      ) : (
        <p>변화 탐지 로그 불러오는 중</p>
      )}
    </div>
  );
};

DetailImages.propTypes = {
  logData: PropTypes.shape({
    cd: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        farm_change_detection_image: PropTypes.string.isRequired,
      })
    ),
    cd_log: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        farm_change_detection_result_image1: PropTypes.string,
        farm_change_detection_result_image2: PropTypes.string,
      })
    ),
    change_rating_result: PropTypes.string, 
  }),
};

export default DetailImages;