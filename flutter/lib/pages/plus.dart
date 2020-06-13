import 'package:flutter/material.dart';

const textStyle1 = TextStyle(fontSize: 64);

class Plus extends StatelessWidget {

  Plus({@required this.first});
  final first;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: <Widget>[
        Text('$first', style: textStyle1),
        Text('+     18', style: textStyle1), 
        Container(
          decoration: BoxDecoration(
            border: Border.all()
          ),
        ),
        new TextField(
          decoration: new InputDecoration(),
          keyboardType: TextInputType.number,
          textAlign: TextAlign.right,
          style: textStyle1
        ),
      ]
    );
  }
}