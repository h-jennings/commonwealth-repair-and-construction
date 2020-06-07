import React from 'react';

export const TypeTest = () => {
  return (
    <>
      {/* regular */}
      <div style={{ display: 'none' }}>
        <div style={{ fontSize: 'var(--fz-super)', marginBottom: 12 }}>
          Testing
        </div>
        <div style={{ fontSize: 'var(--fz-xl)', marginBottom: 12 }}>
          Testing
        </div>
        <div style={{ fontSize: 'var(--fz-lg)', marginBottom: 12 }}>
          Testing
        </div>
        <div style={{ fontSize: 'var(--fz-md)', marginBottom: 12 }}>
          Testing
        </div>
        <div style={{ fontSize: 'var(--fz-base)', marginBottom: 12 }}>
          Testing
        </div>
        <div style={{ fontSize: 'var(--fz-sm)', marginBottom: 12 }}>
          Testing
        </div>
        <div style={{ fontSize: 'var(--fz-xsm)' }}>Testing</div>
      </div>
      {/* display */}
      <div>
        <div
          style={{
            fontSize: 'var(--fz-super-display)',
            fontFamily: 'var(--ff-display)',
            lineHeight: 1,
          }}>
          Testing
        </div>
        <div
          style={{
            fontSize: 'var(--fz-xl-display)',
            fontFamily: 'var(--ff-display)',
            lineHeight: 1,
          }}>
          Testing
        </div>
        <div
          style={{
            fontSize: 'var(--fz-lg-display)',
            fontFamily: 'var(--ff-display)',
            lineHeight: 1,
          }}>
          Testing
        </div>
        <div
          style={{
            fontSize: 'var(--fz-md-display)',
            fontFamily: 'var(--ff-display)',
            lineHeight: 1,
          }}>
          Testing
        </div>
        <div
          style={{
            fontSize: 'var(--fz-base-display)',
            fontFamily: 'var(--ff-display)',
            lineHeight: 1,
          }}>
          Testing
        </div>
        <div
          style={{
            fontSize: 'var(--fz-sm-display)',
            fontFamily: 'var(--ff-display)',
            lineHeight: 1,
          }}>
          Testing
        </div>
        <div
          style={{
            fontSize: 'var(--fz-xsm-display)',
            fontFamily: 'var(--ff-display)',
            lineHeight: 1,
          }}>
          Testing
        </div>
      </div>
    </>
  );
};
