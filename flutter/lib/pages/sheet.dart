import 'package:flutter/material.dart';
import 'question.dart';

class Sheet extends StatelessWidget {
  const Sheet({ 
    Key key, 
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(32.0),
      child: Column(
        children: <Widget>[
          Question(first: 6, second: 8, op: '+'),
          Question(first: 12, second: 3, op: '-'),
          Question(first: 6, second: 8, op: '+'),
          Question(first: 6, second: 8, op: '+'),
          Question(first: 19, second: 8, op: '-'),
          Question(first: 19, second: 8, op: '-'),
        ] 
      ),
    );
  }
}