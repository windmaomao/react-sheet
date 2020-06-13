import 'package:flutter/material.dart';

class PadKey extends StatelessWidget {
  const PadKey({ 
    Key key, 
    @required this.text
  }) : super(key: key);

  final String text;

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: EdgeInsets.all(0.0),
        child: FlatButton(
          child: Text('$text'),
          color: Colors.white,
          onPressed: () => {}
        )
    );
  }
}