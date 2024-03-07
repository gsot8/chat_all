from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import *


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "user"
    login: Mapped[str] = mapped_column(String, primary_key=True)
    password: Mapped[str] = mapped_column(String, primary_key=False)
    token: Mapped[str] = mapped_column(String, primary_key=False)



class Message(Base):
    __tablename__ = "message"
    id: Mapped[int] = mapped_column(Integer,primary_key= True)
    content: Mapped[str] = mapped_column(String, primary_key=False)
    login: Mapped[str] = mapped_column(String, ForeignKey('user.login'))
    time: Mapped[str] = mapped_column(String, primary_key=False)


db = SQLAlchemy(model_class=Base)
