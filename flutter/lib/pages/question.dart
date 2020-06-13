import 'package:flutter/material.dart';

class Question extends StatelessWidget {
  const Question({ 
    Key key, 
    @required this.first,
    @required this.second,
    @required this.op
  }) : super(key: key);

  final int first;
  final int second;
  final String op;

  @override
  Widget build(BuildContext context) {
    return Card(
    child: ListTile(
      leading: Icon(
        Icons.add,
        size: 24.0,
        color: Colors.lightGreen,
      ),
      title: Text('$first $op $second ='),
      trailing: Text(
        '',
        style: TextStyle(color: Colors.lightBlue),
      ),
      selected: true,
      onTap: () {},
    ),
    );
  }
}