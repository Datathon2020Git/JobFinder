module.exports = {
  name: 'job-finder',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/job-finder',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
