import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Course from './Course';

const CourseList = ({courses}) => (
    <ScrollView contentContainerStyle={styles.courseList}>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </ScrollView>
  );

  const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
  });

  export default CourseList;